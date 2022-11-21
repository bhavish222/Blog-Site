import React from "react"
import Card from "../other/Card"
import PlainCard from "../other/PlainCard"
import Heading from "../other/Heading"
import latest1 from "../../assets/latest1.jpg"
import latest4 from "../../assets/latest4.jpg"
import latest2 from "../../assets/latest2.jpg"
import latest5 from "../../assets/latest5.jpg"
import latest6 from "../../assets/latest6.jfif"
import latest7 from "../../assets/latest7.jfif"
import latest8 from "../../assets/latest8.jpg"
import River from "../../assets/river.jpg"
import Mountains from "../../assets/mountains.jpg"
import Arrow from "../../assets/arrow.svg"

export default function LatestArticles() {
    return (
        <div id="articles" className="pad">
            <Heading value="Latest Articles" />
            <div id="articles--container">
                <div id="articles--left">
                    <div className="card-container" style={{ flexDirection: "column" }}>
                        <Card
                            image={latest6}
                            title="The Statue of Unity"
                            text="The Statue of Unity is the world's tallest statue, with a height of 182 metres (597 feet),[3] located near Kevadia in the state of Gujarat, India."
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="hr"></p>
                        <Card
                        image={latest7}
                            title="Konark Sun Temple"
                            text="The breathtaking Sun Temple in Odisha's Konark is dedicated to the Hindu Sun God, Surya and attributed to King Narasimhadeva I of the Eastern Ganga dynasty."
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="hr"></p>
                        <Card
                            image={latest8}
                            title="Hampi or Hampe"
                            text="Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi town, Vijayanagara district, east-central Karnataka, India."
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="hr"></p>
                        <Card
                            image={latest5}
                            title="Ajanta-Ellora Caves"
                            text="Ellora is a UNESCO World Heritage Site located in the Aurangabad district of Maharashtra, India. It is one of the largest rock-cut Hindu temple cave complexes in the world."
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="loadMore-btn">
                            <img src={Arrow} alt="Not found"></img>
                            LEARN MORE
                        </p>
                    </div>
                    <PlainCard
                        image={River}
                        title="Title of vertical gallery"
                        genre="Travel"
                        date="August 21 2017"
                        big={true}
                    />
                </div>
                <div id="articles--right">
                    <div id="articles--advertisement">
                        <h1>Advertisement</h1>
                    </div>
                    <div id="topPosts">
                        <Heading value="Top Posts" />
                        <div className="card-container" style={{ flexDirection: "column" }}>
                            <Card
                                image={Mountains}
                                title="Catch waves with an adventure guide"
                                genre="Travel"
                                date="August 20 2022"
                                row={false}
                                big={true}
                            />
                            <p id="hr"></p>
                            <Card
                                image={latest2}
                                title="Golden Temple"
                                genre="Travel"
                                date="August 20 2022"
                                row={true}
                                big={false}
                            />
                            <p id="hr"></p>
                            <Card
                                image={latest4}
                                title="Red Fort"
                                genre="Travel"
                                date="August 20 2022"
                                row={true}
                                big={false}
                            />
                            <p id="hr"></p>
                            <Card
                                image={latest1}
                                title="Taj Mahal"
                                genre="Travel"
                                date="August 20 2022"
                                row={true}
                                big={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}