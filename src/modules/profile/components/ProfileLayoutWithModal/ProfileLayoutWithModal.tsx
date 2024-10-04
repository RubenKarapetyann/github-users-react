import { useCallback, useState } from "react"
import { IProfileLayoutWithModalProps } from "../../types"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import { Modal1, Modal2 } from "../../../common/components"
import ModalContent from "../ModalContent/ModalContent"
import { PALETTE } from "../../../common/constants/palette"
import Button from "../../../common/components/Button/Button"
import { addUserToFavourites } from "../../../favourites/services"

const ProfileLayoutWithModal = (props: IProfileLayoutWithModalProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => setIsOpen(false)

    const onOpenModal = useCallback(() => setIsOpen(true), [])

    return (
        <>
            <ProfileLayout {...props} onOpenModal={onOpenModal}/>
            {/* <Modal1 
                isOpen={isOpen} 
                onClose={onClose}
                title={<h2 style={{ color: PALETTE.orange }}>{props.login}</h2>}
                closeIfClickedOutside
                footer={
                    <>
                        <Button color={PALETTE.purple} onClick={onClose}>Cancel</Button>
                        {"    "}
                        <Button onClick={() => addUserToFavourites(props)}>Add To Favourites</Button>
                    </>
                }
            >
                <ModalContent
                    avatar_url={props.avatar_url}
                    name={props.name}
                />
            </Modal1> */}

            <Modal2 onClose={onClose} isOpen={isOpen}>
                <Modal2.Title>
                    <h2 style={{ color: PALETTE.orange }}>{props.login}</h2>
                    {/* <Modal2.CloseButton /> */}
                </Modal2.Title>
                <Modal2.Content>
                    <ModalContent
                        avatar_url={props.avatar_url}
                        name={props.name}
                    />
                </Modal2.Content>
                <Modal2.Footer>
                    <>
                        <Button color={PALETTE.purple} onClick={onClose}>Cancel</Button>
                        {"    "}
                        <Button onClick={() => addUserToFavourites(props)}>Add To Favourites</Button>
                    </>
                </Modal2.Footer>
            </Modal2>
        </>
    )
}

export default ProfileLayoutWithModal