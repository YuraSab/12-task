import React from "react";
import {FilmItem} from "../filmItem";
import styles from "./FilmList.module.css";

export const FilmList = ({items}) => {

    console.log(items, "from FilmList")

    return (
        <div className={styles.listWrapper}>
            {
                items.map((value) => (
                        <div className={styles.itemWrapper} key={value.id}>
                            <FilmItem

                                item={value}
                            />
                        </div>
                    )
                )
            }

        </div>
    )
}