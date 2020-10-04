import React, { useState } from "react";
import { ReactComponent as StelliumLogo } from "../../assets/stellium-logo.svg";
import APIService from "../../services/APIService";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
    const [state, setState] = useState<string>();

    const GetData = async () => {
        const stuff = await APIService.GetStuff('Stellium');
        setState(window.atob(stuff.content));
    };

    return (
        <div className={styles.container}>
            {state !== undefined ? (
                <div
                    className={styles.result}
                    dangerouslySetInnerHTML={{ __html: state }}
                />
            ) : (
                    <div>
                        <StelliumLogo className={styles.logo} />
                        <button onClick={GetData} className={styles.button}>
                            Launch
                        </button>
                    </div>
                )}
        </div>
    );
};

export default Home;
