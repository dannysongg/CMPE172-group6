import React from "react";
//import './App.css';
import './Seats.css';

const Seats = () => {
    return(
        
        <header className="App-header">
        <a class = "home" href="/">Home</a>
        <table>
                <tr>
                    <td colspan="14"><div class="screen">SCREEN</div></td>
                    <td rowspan="20">
                    </td>
                    
                    <br/>
                </tr>
                
                <tr class ="text">
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td></td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                </tr>

                <tr class = "text">
                <td>A</td>
                    <td><input type="checkbox" class="seats" value="A1"/> </td>
                    <td><input type="checkbox" class="seats" value="A2"/> </td>
                    <td><input type="checkbox" class="seats" value="A3"/> </td>
                    <td><input type="checkbox" class="seats" value="A4"/> </td>
                    <td><input type="checkbox" class="seats" value="A5"/> </td>
                    <td class="seatGap"></td>
                    <td><input type="checkbox" class="seats" value="A6"/> </td>
                    <td><input type="checkbox" class="seats" value="A7"/> </td>
                    <td><input type="checkbox" class="seats" value="A8"/> </td>
                    <td><input type="checkbox" class="seats" value="A9"/> </td>
                    <td><input type="checkbox" class="seats" value="A10"/> </td>
                </tr>

                <tr class = "text">
                    <td>B</td>
                    <td><input type="checkbox" class="seats" value="B1"/> </td>
                    <td><input type="checkbox" class="seats" value="B2"/> </td>
                    <td><input type="checkbox" class="seats" value="B3"/> </td>
                    <td><input type="checkbox" class="seats" value="B4"/> </td>
                    <td><input type="checkbox" class="seats" value="B5"/> </td>
                    <td class="seatGap"></td>
                    <td><input type="checkbox" class="seats" value="B6"/> </td>
                    <td><input type="checkbox" class="seats" value="B7"/> </td>
                    <td><input type="checkbox" class="seats" value="B8"/> </td>
                    <td><input type="checkbox" class="seats" value="B9"/> </td>
                    <td><input type="checkbox" class="seats" value="B10"/> </td>
                </tr>

                <tr class = "text">
                    <td>C</td>
                    <td><input type="checkbox" class="seats" value="C1"/> </td>
                    <td><input type="checkbox" class="seats" value="C2"/> </td>
                    <td><input type="checkbox" class="seats" value="C3"/> </td>
                    <td><input type="checkbox" class="seats" value="C4"/> </td>
                    <td><input type="checkbox" class="seats" value="C5"/> </td>
                    <td class="seatGap"></td>
                    <td><input type="checkbox" class="seats" value="C6"/> </td>
                    <td><input type="checkbox" class="seats" value="C7"/> </td>
                    <td><input type="checkbox" class="seats" value="C8"/> </td>
                    <td><input type="checkbox" class="seats" value="C9"/> </td>
                    <td><input type="checkbox" class="seats" value="C10"/> </td>
                </tr>
                
                <tr class="gap"></tr>

                <tr class = "text">
                    <td>D</td>
                    <td><input type="checkbox" class="seats" value="D1"/> </td>
                    <td><input type="checkbox" class="seats" value="D2"/> </td>
                    <td><input type="checkbox" class="seats" value="D3"/> </td>
                    <td><input type="checkbox" class="seats" value="D4"/> </td>
                    <td><input type="checkbox" class="seats" value="D5"/> </td>
                    <td class="seatGap"></td>
                    <td><input type="checkbox" class="seats" value="D6"/> </td>
                    <td><input type="checkbox" class="seats" value="D7"/> </td>
                    <td><input type="checkbox" class="seats" value="D8"/> </td>
                    <td><input type="checkbox" class="seats" value="D9"/> </td>
                    <td><input type="checkbox" class="seats" value="D10"/> </td>
                </tr>

                <tr class = "text">
                    <td>E</td>
                    <td><input type="checkbox" class="seats" value="E1"/> </td>
                    <td><input type="checkbox" class="seats" value="E2"/> </td>
                    <td><input type="checkbox" class="seats" value="E3"/> </td>
                    <td><input type="checkbox" class="seats" value="E4"/> </td>
                    <td><input type="checkbox" class="seats" value="E5"/> </td>
                    <td class="seatGap"></td>
                    <td><input type="checkbox" class="seats" value="E6"/> </td>
                    <td><input type="checkbox" class="seats" value="E7"/> </td>
                    <td><input type="checkbox" class="seats" value="E8"/> </td>
                    <td><input type="checkbox" class="seats" value="E9"/> </td>
                    <td><input type="checkbox" class="seats" value="E10"/> </td>
                </tr>

                <tr class = "text">
                    <td>F</td>
                    <td><input type="checkbox" class="seats" value="F1"/> </td>
                    <td><input type="checkbox" class="seats" value="F2"/> </td>
                    <td><input type="checkbox" class="seats" value="F3"/> </td>
                    <td><input type="checkbox" class="seats" value="F4"/> </td>
                    <td><input type="checkbox" class="seats" value="F5"/> </td>
                    <td class="seatGap"></td>
                    <td><input type="checkbox" class="seats" value="F6"/> </td>
                    <td><input type="checkbox" class="seats" value="F7"/> </td>
                    <td><input type="checkbox" class="seats" value="F8"/> </td>
                    <td><input type="checkbox" class="seats" value="F9"/> </td>
                    <td><input type="checkbox" class="seats" value="F10"/> </td>
                    
                </tr>


        </table>
        </header>
        
    );
    
}


export default Seats;