import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <main>
                <div class="contact">
                    <div class="left">
                        <h3>Bojan Dimitric</h3>
                        <div>
                            <h3>Adress</h3>
                            <p>
                                Kraljice Katarine 80/18<br />
                                11300, Beograd, Srbija
                            </p>
                            <br />
                            <h3>Telefon</h3>
                            <p>064/433-76-41</p>
                            <br />
                            <h3>Mejl</h3>
                            <p>bojan.dimitric@gmail.com</p>
                        </div>
                    </div >
                    <div class="right">
                        <iframe width="100%" height="300" width="450" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Kraljice%20Katarine%2080%2F18%2C%2011030%20Beograd%2C%20Srbija+(Bojan%20Dimitric)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a></iframe>
                    </div>
                    <div class="bottom">
                        <h3>Posaljite mi mejl</h3>
                        <form>
                            <input type="text" placeholder="vase ime" />
                            <br />
                            <br />
                            <input type="text" placeholder="vas mejl" />
                            <br />
                            <br />
                            <input type="text" placeholder="vasa tema" />
                            <br />
                            <br />
                            <textarea type="textarea" className="textarea" rows="6" cols="30" placeholder="vasa poruka" />
                        </form>
                    </div>
                </div >
            </main>
        );
    };
}

export default Contact;