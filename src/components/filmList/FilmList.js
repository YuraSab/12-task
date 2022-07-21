import React, {useCallback} from "react";
import {FilmItem} from "../filmItem";
import styles from "./FilmList.module.css";

export const FilmList = ({items, onFilmClick}) => {

    console.log(items, "from FilmList")

    return (
        <div className={styles.listWrapper}>
            {
                items.map((value) => (
                        <div
                            onClick={() => onFilmClick(value)}
                            key={value.id}
                            className={styles.itemWrapper}>
                            <FilmItem

                                // onFilmClick={onFilmClick}
                                item={value}
                            />
                        </div>
                    )
                )
            }

        </div>
    )
}