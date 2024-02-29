import Card from "./Card";
import './AppDemo.css';
/*AppDemo is the Parent Component 
 Card is the child component to which props are passed from AppDemo
*/
export default function AppDemo() {
    return (
        <div className="App">
            <Card
                img="https://th.bing.com/th/id/OIP.zmr-k93NGE99mz0-a_zmxgHaFj?rs=1&pid=ImgDetMain"
                name="Alex"
                work="Designer"
                hobby="Painting"
                origin="Australia"
            />
            <Card
                img="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/qmraJpx/videoblocks-portrait-of-smiling-male-college-student-in-busy-communal-campus-building_s-zrzm3vi_thumbnail-1080_01.png"
                name="John"
                work="Designer"
                hobby="Painting"
                origin="Norway"
            />
            <Card
                img="https://thumbs.dreamstime.com/b/portrait-smiling-male-college-student-busy-communal-campus-building-portrait-smiling-male-college-student-busy-196643670.jpg"
                name="David"
                work="Designer"
                hobby="Painting"
                origin="Germany"
            />
            <Card
                img="https://th.bing.com/th/id/OIP.P3qk-H_5elOd79fLcTWqAwHaLG?rs=1&pid=ImgDetMain"
                name="crystal swift"
                work="Designer"
                hobby="Painting"
                origin="switzerland"

            />
        </div>
    )
}