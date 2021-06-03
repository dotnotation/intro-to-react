import React, { Component } from 'react'
import ListItem from "../components/Listitem"

class List extends Component {


    render() {
        // we have an array of blogs
        // WE want to pass down one blogs info for each LI
        // const blogs = this.props.blogs.map((blog) => <ListItem title={blog.title} content={blog.content}/>)
        const blogs = this.props.blogs.map((blog) => <ListItem {...blog} />)

        return (
            <div>
                <h3>BLOGS:</h3>
                {blogs}
            </div>
        )
    }
}

export default List
