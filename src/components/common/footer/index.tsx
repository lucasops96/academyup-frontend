/* eslint-disable @next/next/no-img-element */
import { Container } from "reactstrap";
import styles from "./styles.module.scss"
import Link from "next/link";

const Footer = function (){
    return(
        <>
        <Container className={styles.footer}>
            <Link href="/home" className={styles.linkLogo}>
                <img 
                    src="/AcademyUP.png" 
                    alt="logoFooter"
                    className={styles.footerLogo} 
                />
            </Link>
            <a 
                href="http://acamedyup.com"
                target={"_blank"}
                className={styles.footerLink}
            >
                ACADEMYUP.COM
            </a>
        </Container>
        </>
    );
};

export default Footer;