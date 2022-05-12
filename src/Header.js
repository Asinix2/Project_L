import React from "react";
import {Container, Image, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <Menu inverted fixed='top' size="massive">
                <Container>
                    <NavLink to="/">
                        <Menu.Item header className="menuItem" >
                        Accueil
                        </Menu.Item>
                    </NavLink>
                    <NavLink to="IA"><Menu.Item className="menuItem">IA</Menu.Item></NavLink>
                    <NavLink to="UI"><Menu.Item className="menuItem" >UI</Menu.Item></NavLink>
                    <NavLink to="Autre"><Menu.Item className="menuItem">Autre</Menu.Item></NavLink>
                </Container>
            </Menu>
        )
    }
}

export default Header;