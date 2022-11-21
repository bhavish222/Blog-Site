import React from "react"
import Heading from "../other/Heading"
import Card from "../other/Card"
import Image from "../../assets/adventure.jpg"
import latest1 from "../../assets/latest1.jpg"
import latest2 from "../../assets/latest2.jpg"

export default function OtherArticles() {
    return (
        <div id="otherArticles" className="pad">
            <Heading value="More from The Siren" />
            <div className="card-container">
                <Card
                    image={Image}
                    title="Joshua Tree Overnight Adventure"
                    text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination."
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
                <Card
                    image={latest1}
                    title="Taj Mahal"
                    text="'Crown of the Palace'), is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It is the famous wonder of India."
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
                <Card
                    image={latest2}
                    title="Golden Temple"
                    text="Sri Harmandir Sahib (formerly known as Sri Hari Mandir Sahib) is the official and original name of the Golden Temple. It is in the city of Amritsar, Punjab.Maharaja Ranjit Singh."
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
            </div>
        </div>
    )
}