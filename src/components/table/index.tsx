import React from "react";
import { Box } from "elements";
import { BasicVar, FontStyle } from "styles/variables";

export interface FieldItem {
    label: any
    key: string
    align?: 'left' | 'center' | 'right'
    render: (v: any, i: any, k: number) => void
}

interface TableProps {
    data: any[]
    fields: any[]
}

const Table = ({ data, fields }: TableProps) => {
    return (
        <Box>
            <Box as={'table'}
                w={'100%'}
            >
                <Box as={'thead'}>
                    <Box as={'tr'}
                        other={`
                            & th:first-child {
                                padding-left: 3rem;
                            }
                            & th:last-child {
                                padding-right: 3rem;
                            }
                        `}
                    >
                        {fields.map((item: FieldItem, key: number) => (
                            <Box key={key} as={'th'}
                                txtTrans={'uppercase'}
                                tAlign={item.align || 'left'}
                                p={'1rem 0.5rem'}
                                fWeight={FontStyle.bold.label}
                                lSpace={'2px'}
                            >
                                {item.label}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box as={'tbody'}
                    other={`
                        & tr:nth-child(odd) {
                            background: ${BasicVar.bgOpacity.label};
                        }
                    `}
                >
                    {data.map((item: any, key: number) => (
                        <Box key={key} as={'tr'}
                            other={`
                                & td:first-child {
                                    border-radius: 100px 0 0 100px;
                                    padding-left: 3rem;
                                }
                                & td:last-child {
                                    border-radius: 0 100px 100px 0;
                                    padding-right: 3rem;
                                }
                            `}
                        >
                            {fields.map((field: FieldItem, fkey: number) => (
                                <Box key={fkey} as={'td'}
                                    tAlign={item.align || 'left'}
                                    p={'1rem 0.5rem'}
                                >
                                    {
                                        field.render(item[field.key], item, key)
                                    }
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Table;
