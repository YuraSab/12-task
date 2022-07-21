import React from "react";
import {FilmItem} from "../filmItem";
import styles from "./FilmList.module.css";

export const FilmList = ({items, onFilmClick}) => {

    console.log(items, "from FilmList")

    return (
        <div className={styles.listWrapper}>
            {
                items.map((value) => (
                        <div
                            key={value.id}
                            onClick={onFilmClick(value)}
                            className={styles.itemWrapper}>
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