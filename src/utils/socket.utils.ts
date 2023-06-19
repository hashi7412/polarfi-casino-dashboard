import { useEffect, useState, useRef } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import useStore from "useStore";

const useSocket = (api: string) => {
    const { cookie } = useStore();
    const didUnmount = useRef(false);
    const [res, setRes] = useState();
    const baseUrl = 'ws://localhost:8080/ws';
    const { sendMessage, lastMessage, readyState } = useWebSocket(
        baseUrl + (api),
        {
            shouldReconnect: (closeEvent) => {
                return didUnmount.current === false;
            },
            reconnectAttempts: 3000,
            reconnectInterval: 3000
        }
    );

    const send = (params: any) => {
        const req: any = [
            process.env.REACT_APP_KEY,
            cookie,
            params
        ]

        console.log(JSON.stringify(req));

        sendMessage(JSON.stringify(req))
    }

    useEffect(() => {
        if (lastMessage) {
            console.log(decodeURI(lastMessage.data));
            setRes(JSON.parse(decodeURI(lastMessage.data)))
        }
    }, [lastMessage])

    useEffect(() => {
        switch (readyState) {
            case -1:
                console.log('Uninstantiated');
                return;
            case 0:
                console.log('Socket connecting...');
                return;
            case 1:
                console.log('Socket connected');
                return;
            case 2:
                console.log('Socket closing...');
                return;
            case 3:
                console.log('Socket closed');
                return;

        }
    }, [readyState])

    useEffect(() => {
        return () => {
            didUnmount.current = true;
        };
    }, []);

    return {
        send,
        res
    };
}

export default useSocket;
