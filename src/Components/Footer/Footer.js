import React from "react";
import { FooterItem } from "./FooterItem";
import styles from "./style.module.scss";
import facebookIcon from "../../images/facebook.png";
import instagramIcon from "../../images/instagram.png";
import twitterIcon from "../../images/twitter.png";
import youtubeIcon from "../../images/youtube.png";

function Footer() {
    const menuItems = [
        { title: "Sesli Betimleme", link: "/faq" },
        { title: "Hediye Kartları", link: "/faq" },
        { title: "Yatırımcı İlişkileri", link: "/faq" },
        { title: "Kullanım Koşulları", link: "/faq" },
        { title: "Yasal Hükümler", link: "/faq" },
        { title: "Kurumsal Bilgiler", link: "/faq" },
        { title: "Yardım Merkezi", link: "/faq" },
        { title: "Medya Merkezi", link: "/faq" },
        { title: "İş İmkanları", link: "/faq" },
        { title: "Gizlilik", link: "/faq" },
        { title: "Çerez Tercihleri", link: "/faq" },
        { title: "Bize Ulaşın", link: "/faq" },
    ];

    const socialMediaIcons = [
        { icon: facebookIcon, link: "https://facebook.com" },
        { icon: instagramIcon, link: "https://instagram.com" },
        { icon: twitterIcon, link: "https://twitter.com" },
        { icon: youtubeIcon, link: "https://youtube.com" },
    ];

    const groupedMenuItems = [];
    const groupSize = 3;

    for (let i = 0; i < menuItems.length; i += groupSize) {
        groupedMenuItems.push(menuItems.slice(i, i + groupSize));
    }

    return (
        <div className={styles.footer}>
            <div className={styles["social-media-icons"]}>
                {socialMediaIcons.map((icon, index) => (
                    <a
                        key={index}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={icon.icon} alt={`Social Media ${index + 1}`} />
                    </a>
                ))}
            </div>

            <div className={styles["footer-item-container"]}>
                {groupedMenuItems.map((group, groupIndex) => (
                    <div key={groupIndex} className={styles["footer-item-group"]}>
                        {group.map((menuItem) => (
                            <FooterItem
                                key={menuItem.title}
                                title={menuItem.title}
                                link={menuItem.link}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <button className={styles["service-code"]}>Hizmet Kodu</button>
            <h1 className={styles["copyright"]}>1997-2024 Netflix, Inc.</h1>
        </div>
    );
}

export default Footer;
