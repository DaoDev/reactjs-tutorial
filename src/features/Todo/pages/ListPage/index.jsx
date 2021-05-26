import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string'

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Learn',
            status: 'completed'

        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new'

        },
        {
            id: 4,
            title: 'Code',
            status: 'completed'

        },
        {
            id: 5,
            title: 'Play',
            status: 'new'

        },
    ]

    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()

    const [todoList, setTodoList] = useState(initTodoList)
    const [filterdStatus, setFiletedStatus] = useState(() => {
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })

    useEffect(() => {
        const params = queryString.parse(location.search)
        setFiletedStatus(params.status || 'all')
    }, [location.search])

    const handleTodoClick = (item, index) => {
        const newTodoList = [...todoList]
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        }

        setTodoList(newTodoList)
    }

    const hanldeShowCompletedClick = () => {
        const queryParams = { status: 'completed' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowAllClick = () => {
        const queryParams = { status: 'all' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const hanldeShowNewClick = () => {
        const queryParams = { status: 'new' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const renderTodoList = useMemo(() => {
        return todoList.filter(todo => filterdStatus === 'all' || filterdStatus === todo.status)
    }, [todoList, filterdStatus])
    return (
        <div>
            <TodoList
                todoList={renderTodoList}
                onTodoCLick={handleTodoClick}
            />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={hanldeShowCompletedClick}>Show Completed</button>
                <button onClick={hanldeShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;