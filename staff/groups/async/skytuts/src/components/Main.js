
import React, { Component } from 'react'

import Card from './Card'
import Navbar from './Navbar'
import Popup from './Popup'

import template from './templates/Main.pug'


import logicUdacity from '../logic/udacity'
import logicAuth from '../logic/auth'
import logicFilter from '../logic/filter'

class Main extends Component {

    state = {
        courses: [],
        tracks: [],
        coursesToShow: [],
        track: null,
        error: null,
        showPopup: false
    }

    total = 0

    filterCoursesByTrack = (track) => {
        this.setState({ coursesToShow: logicFilter.filterCourses().byTrack(track), track })
    }

    filterCoursesByLevel = (level) => {
        this.setState({ coursesToShow: logicFilter.filterCourses().byLevel(level, this.state.track) })
    }

    filterPersonalized = (event) => {
        this.setState({ coursesToShow: logicFilter.filterCourses().personalized(event.target.value) })
    }

    listCourses = () => {
        try {
            logicUdacity.getCourses()
                .then(() => {
                    const data = logicUdacity._courses
                    this.setState({
                        courses: data.courses || [],
                        tracks: data.tracks || [],
                    })
                    this.loadMore()
                })
                .catch(error => this.setState({ error: error.message }))
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    loadMore() {
        let coursesToShow = Object.assign({}, this.state.courses)
        this.total += 6
        coursesToShow = Object.values(coursesToShow).splice(0, this.total)
        this.setState({ coursesToShow })
    }

    componentDidMount() {
        this.loadMore()
        window.onscroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.loadMore()
            }
        };
    }

    componentWillMount() {
        const data = logicUdacity._courses
        if (data) {
<<<<<<< HEAD
            this.setState({
                courses: data.courses.slice(0, 6) || [],
=======
            this.setState({ 
                courses: data.courses || [],
>>>>>>> develop
                tracks: data.tracks || [],
            })
        } else {
            this.listCourses();
        }

    }

    render() {
<<<<<<< HEAD
        return (
            <main>

                <div id="search">
                    < Navbar />
                    <input onChange={this.filterPersonalized} type="text" placeholder="Search course..." />
                    <img src='https://images.pexels.com/photos/1036873/pexels-photo-1036873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="ayaya" />}
                    <canvas id="canvas"></canvas>
                </div>

                <div className="main">
                    <section className="list-container">

                        {(this.state.tracks || []).map((track, index) => <span onClick={() => this.filterCoursesByTrack(track)} key={index}>{track.name}</span>)}
                        <div className="toggle-panel">
                            <form className="toggle-panel-form">
                                <label className="switch">
                                    <input type="checkbox" onClick={() => this.filterCoursesByLevel('beginner')}></input>
                                    <span>Beginner</span><br></br></label>
                                <input type="checkbox" onClick={() => this.filterCoursesByLevel('intermediate')}></input>
                                <label className="switch">
                                    <span>Intermediate</span><br></br></label>
                                <label className="switch">
                                    <input type="checkbox" onClick={() => this.filterCoursesByLevel('advanced')}></input>
                                    <span>Advanced</span></label>
                            </form>
                        </div>
                        {this.state.error &&
                            <p>{this.state.error}</p>
                        }

                    </section>

                    < section className="cards-container" >
                        {(this.state.courses || []).map((course, index) => <Card course={course} key={index} />)}
                    </section >
                </div>
            </main >
        )
=======

        let card = (this.state.coursesToShow || []).map((course, index) => (<Card course={course} key={index} />))
        
        let links = (['beginner', 'intermediate', 'advanced']).map((type, index) => <span key={index} onClick={() => this.filterCoursesByLevel(type)}>{type}</span>)

        let track = (this.state.tracks || []).map((track, index) => <span onClick={() => this.filterCoursesByTrack(track)} key={index}>{track.name}</span>)
       
        let popup = (<Popup text='You need to be logged in to view courses!' closePopup={this.togglePopup}/>)

        const {showPopup, error} = this.state
                     
        return template.call(this, {  
            auth: logicAuth.isAuthenticated(), 
            error,     
            card,
            links,
            track,
            popup,
            showPopup,
            Navbar
        });

>>>>>>> develop
    }
}

export default Main

