export default function Display(props){
    return(
        <>
            <div className="main">
                <hr />
                <div className="logo">
                    <img src={props.current.condition.icon} alt="weather icon" />
                    <span>{props.current.condition.text}</span><br /><br />
                </div>
                <ul className="ul">
                    <h2> <b> {props.location.name}</b></h2>
                    <li>Temperature : {props.current.temp_c}°C</li>
                    <li>Feels Like : {props.current.feelslike_c}°C</li>
                    <li>Humidity : {props.current.humidity}</li>
                    <li>Cloud : {props.current.cloud}</li>
                    <li>Wind : {props.current.wind_kph} km/h</li>
                    <li>Wind Direction : {props.current.wind_dir}</li>
                    <li>UV Index : {props.current.uv}</li>
                    <li>Country : {props.location.country}</li>
                    <li>Timezone : {props.location.tz_id}</li>
                    <li>Latitude : {props.location.lat}</li>
                    <li>Longitude : {props.location.lon}</li>
                </ul>
            </div>
        </>
    );
}