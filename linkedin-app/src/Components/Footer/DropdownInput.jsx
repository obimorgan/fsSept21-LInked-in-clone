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
                <InputGroup className="dropdownFooter">
                    <FormControl
                        className="dropdownFooter"
                        placeholder="English"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />

                    <DropdownButton
                        as={InputGroup.Append}
                        variant=""

                        id="input-group-dropdown-2"
                        className="border-left-0"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
            </Row>
        </>
    )
}

export default DropdownInput