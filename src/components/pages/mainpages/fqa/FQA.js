import React from 'react';
import FQACss from './FQA.module.css'
import search from './search.svg'
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'


class FQA extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            faqs: [],
            value: ""
        }

        this.onHandleChange = this.onHandleChange.bind(this)
    }

    componentDidMount () {
        fetch('https://api.fundmylaptop.com/api/faqs')
            .then(res => res.json())
            .then(data => this.setState({faqs: data.data}))
            .catch(err => console.err(err))
    }

    onHandleChange(e) {
        this.setState({value: e.target.value})
    }

    render () {
        return (
            <ScrollIntoView>
                <Navbar/>
                    <section className={[FQACss.custom__py_main, FQACss.bg_light, "container-fluid"].join(' ')}>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-9 col-xl-6">
                                <h2 className="text-center">How can we help you?</h2>
                                <div className="position-relative my-4 px-2 px-lg-5">
                                    <input 
                                        type="text" 
                                        className="form-control w-100" 
                                        value={this.state.value}
                                        onChange={this.onHandleChange}
                                    />
                                    <img src={search} className={[FQACss.search_icon, "img-fluid"].join(' ')} alt="search" />
                                </div>
                                <h3 className={[FQACss.text_light, "text-center mb-0 mt-0"].join(' ')}>You can also browse the topics below to find what you’re looking for</h3>
                            </div>
                        </div>
                    </section>
                    <div className="bg-white">
                        <section className="container py-md-4 px-3 px-md-0">
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <h6>Getting Started</h6>
                                    <div className="d-flex flex-column">
                                        <h6 className="py-0 my-3"><a className={[FQACss.links].join(' ')} href="/">Funding </a></h6>
                                        <h6 className="py-0 my-3"><a className={[FQACss.links].join(' ')} href="/">Menu III </a></h6>
                                        <h6 className="py-0 my-3"><a className={[FQACss.links].join(' ')} href="/">Menu IV </a></h6>
                                        <h6 className="py-0 my-3"><a className={[FQACss.links].join(' ')} href="/">Menu V </a></h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-9">
                                    <h2 className="mb-4 mt-4 mt-lg-3">Getting Started</h2>
                                    <div id="accordion">
                                        {this.state.faqs.map((data, idx) => (
                                            <div className="card mb-4" key={data._id}>
                                                <div className={[FQACss.accordion_header, "card-header"].join(' ')} id={`heading${idx}`}>
                                                    <h5 className="mb-0">
                                                        <button className={["pt-md-2", FQACss.no_border].join(' ')} data-toggle="collapse" data-target={`#collapse${idx}`} aria-expanded="true" aria-controls={`collapse${idx}`}>
                                                            <h5 className="text-white">{data.question}</h5>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id={`collapse${idx}`} className="collapse show" aria-labelledby={`heading${idx}`} data-parent="#accordion">
                                                    <div className="card-body">
                                                        {data.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                <Footer/>
            </ScrollIntoView>
        )
    }
}

export default FQA;