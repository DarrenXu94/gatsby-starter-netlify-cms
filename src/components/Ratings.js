import React from 'react'
import PropTypes from 'prop-types'
import ReactStars from "react-rating-stars-component";

const icon = () => {
    return <div>test</div>
}

const Ratings = ({ ratingTaste,
    ratingTexture,
    ratingPrice,
    ratingMouthFeel,
    ratingXFactor }) => (
        <div style={{ boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.1)", marginTop: "10px" }}>
            <div style={{ padding: "30px" }}>
                <strong style={{ display: "flex", flexDirection: "column" }}>
                    <span>Ratings</span>
                    <small>(Out of 5)</small>

                </strong>
                <div className="grid">
                    <div className="ratingsRow gridItem">
                        Taste
                    </div>
                    <span className="gridItem">
                        <ReactStars
                            count={ratingTaste}
                            edit={false}
                            size={24}
                            color="#a24121"
                            char={"🍫"}
                        />
                    </span>
                    <div className="ratingsRow gridItem">
                        Price (affordability)
                    </div>
                    <span className="gridItem">

                        <ReactStars
                            count={ratingPrice}
                            edit={false}
                            size={24}
                            color="#a24121"
                            char={"💸"}
                        />
                    </span>
                    <div className="ratingsRow gridItem">
                        Mouth Feel
                    </div>
                    <span className="gridItem">

                        <ReactStars
                            count={ratingMouthFeel}
                            edit={false}
                            size={24}
                            color="#a24121"
                            char={"😲"}

                        />
                    </span>
                    <div className="ratingsRow gridItem">
                        Texture
                    </div>
                    <span className="gridItem">

                        <ReactStars
                            count={ratingTexture}
                            edit={false}
                            size={24}
                            color="#a24121"
                            char={"😍"}

                        />
                    </span>
                    <div className="ratingsRow gridItem">
                        X Factor
                    </div>
                    <span className="gridItem">

                        <ReactStars
                            count={ratingXFactor}
                            edit={false}
                            size={24}
                            color="#a24121"
                            char={"🚀"}

                        />
                    </span>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )


Ratings.propTypes = {
    ratingTaste: PropTypes.number,
    ratingTexture: PropTypes.number,
    ratingPrice: PropTypes.number,
    ratingMouthFeel: PropTypes.number,
    ratingXFactor: PropTypes.number

}

export default Ratings