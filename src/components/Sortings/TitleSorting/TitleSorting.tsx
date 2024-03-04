import {SetURLSearchParams} from "react-router-dom";
import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {statuses} from "../../../constants";
import css from '../Sorting.module.css'

interface IProps extends PropsWithChildren {
    setQuery: SetURLSearchParams
    query: URLSearchParams
}

const TitleSorting: FC<IProps> = ({setQuery, query}) => {
    const [status, setStatus] = useState<string>(statuses.desc)

    useEffect(() => {
        if ((query.get("sort_by") !== "title.desc") && (query.get("sort_by") !== "title.asc")) {
            setStatus(statuses.neutral)
        }

    }, [query]);

    const neutralClick = () => {
        setStatus(statuses.desc)
        setQuery(prev => {
            prev.set("sort_by", "title.desc")
            return prev
        })
    }
    const descClick = () => {
        setStatus(statuses.asc)
        setQuery(prev => {
            prev.set("sort_by", "title.asc")
            return prev
        })
    }
    const ascClick = () => {
        setStatus(statuses.desc)
        setQuery(prev => {
            prev.set("sort_by", "title.desc")
            return prev
        })
    }


    return (
        <div className={css.cont}>
            {status === statuses.neutral ? <div onClick={neutralClick} className={css.filter}>назвою </div> : null}
            {status === statuses.desc ? <div onClick={descClick} className={css.filter}>назвою
                <img width="15" height="15"
                     src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                     alt="expand-arrow--v1"/></div> : null}
            {status === statuses.asc ? <div onClick={ascClick} className={css.filter}>назвою
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXElEQVR4nN2RMQqAMAwAb1Lwf4UoVX/lR13sJimZBGnSSbwlS+4IBH7J2CuuwAVsPWIBDpvugJigASXZBXtUxBuQF7EZEBNz47L0DEzACSz4mG1fvUr0n0Nw/0vc38UVHyc2bOMAAAAASUVORK5CYII="
                    alt={'down'}/>
            </div> : null}
        </div>
    );
};

export {TitleSorting}