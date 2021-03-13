import React, { useRef } from 'react';
import { DropdownArrow, DropdownContainer, DropdownHeader, DropdownItem, DropdownList, DropdownTitle, IconContainer } from './DropdownStyles';
import dropdownArrow from '../../Assets/Icons/dropdown_arrow.svg'
import { useOutsideAlerter } from '../../utils';

export const Dropdown = (props: React.HtmlHTMLAttributes<HTMLDivElement> & { list: string[]; callback: Function }) => {

    const containerRef = useRef(null)

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null)

    useOutsideAlerter(containerRef, () => {
        setIsOpen(false)
    })

    const handleItemClick = (item: string) => {
        setSelectedItem(item)
        setIsOpen(false)
        props.callback(item)
    }

    return (
        <DropdownContainer ref={containerRef}>
            <DropdownHeader onClick={() => setIsOpen(!isOpen)} >
                <DropdownTitle>{selectedItem ? selectedItem : "Filter by..."}</DropdownTitle>
                <IconContainer>
                    <DropdownArrow isOpen={isOpen} src={dropdownArrow} />
                </IconContainer>
            </DropdownHeader>
            <div>
                <DropdownList isOpen={isOpen}>
                    {
                        props.list.map((item: string, i: number) => {
                            return (
                                <DropdownItem key={"dropdownitem_" + i} onClick={() => handleItemClick(item)}>{item}</DropdownItem>
                            )
                        })
                    }
                </DropdownList>
            </div>

        </DropdownContainer>
    )
}