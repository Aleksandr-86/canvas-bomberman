import classes from './table-row.module.css'

interface Post {
    id: number,
    author: string,
    body: string,
    date: string
}

const TableRow = (props: Post) => {
    return (
        <tr>
            <td className={classes.table__row}>{props.author}</td>
            <td className={classes.table__row}>{props.body}</td>
            <td className={classes.table__row}>{props.date}</td>
        </tr>
    )
}

export { TableRow }

export type { Post }