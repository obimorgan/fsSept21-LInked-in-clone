import "bootstrap/dist/css/bootstrap.css";
import { Row } from "react-bootstrap";
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'

const DropdownInput = () => {
    return (
        <>
            <Row>
                <div className="footerItem">Select language</div>
            </Row>
            <Row>
                <InputGroup>
                    <FormControl
                        className="dropdownFooter border-right-0"
                        placeholder="English"
                        size="sm"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />

                    <DropdownButton
                        as={InputGroup.Append}
                        variant="border"
                        size="sm"
                        id="input-group-dropdown-2"
                        className="border-left-0"
                    >
                        <Dropdown.Item href="#">Italian</Dropdown.Item>
                        <Dropdown.Item href="#">Rusian</Dropdown.Item>
                        <Dropdown.Item href="#">Chinese</Dropdown.Item>
                        <Dropdown.Item href="#">Indonesian</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </Row>
        </>
    )
}

export default DropdownInput