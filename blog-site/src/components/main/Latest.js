import React from "react"
import Heading from "../other/Heading"
import Card from "../other/Card"
import latest1 from "../../assets/latest1.jpg"
import latest2 from "../../assets/latest2.jpg"
import latest3 from "../../assets/latest3.jpg"

export default function Latest() {
    return (
        <div className="pad">
            <Heading value="The Latest" />
            <div className="card-container">
                <Card
                    image={latest1}
                    title="Taj Mahal"
                    text="'Crown of the Palace'), is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra."
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
                <Card
                    image={latest2}
                    title="Golden Temple"
                    text="The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism."
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
                <Card
                    image={latest3}
                    title="Somnath Temple"
                    text="The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India."
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
            </div>
        </div>
    )
}