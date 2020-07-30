import React, { Component } from 'react'
import AdminDashboard from './adminDashboard'
import { connect } from 'react-redux';
import { addFaqs, fetchFaqs, deleteFaqs } from '../../../../actions/actions';

class AddFaq extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: "",
            answer: ""
        }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.onHandleDelete = this.onHandleDelete.bind(this)
    }

    componentDidMount () {
        this.props.fetchFaqs()
    }

    onHandleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onHandleSubmit(e) {
        const { question, answer } = this.state
        const data = {
            question: `${question}?`,
            answer
        }
        this.props.addFaqs(data)
        this.setState({ question: "", answer: ""})
        e.preventDefault()
    }

    onHandleDelete(data) {
        this.props.deleteFaqs(data)
    }

    render() {
        const { question, answer } = this.state
        const { faqs } = this.props
        return (
            <AdminDashboard>
                <div className="container-lg-fluid px-3 px-lg-4 px-xl-5">
                    <div className="row my-4 justify-content-center px-4 px-lg-0 pr-lg-4">
                        <div className="col-md-11 col-lg-5 pl-lg-4">
                            <div className="py-4 bg-white shadow-sm box-radius px-md-5 px-lg-3">
                                <h4 className="text-center">FAQ Creation</h4>
                                <form className="mt-4 px-5 px-md-2 px-xl-3" onSubmit={this.onHandleSubmit}>
                                    <div className="form-group">
                                        <label className="ml-4 ml-md-0 ml-lg-3 font-weight-bold" htmlFor="question">Question:</label>
                                        <input 
                                            type="text" 
                                            name="question" 
                                            id="question" 
                                            className="form-control"
                                            value={question}
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="ml-4 ml-md-0 ml-lg-3 font-weight-bold" htmlFor="answer">Answer:</label>
                                        <textarea 
                                            name="answer" 
                                            id="answer" 
                                            cols="30" 
                                            rows="10" 
                                            className="form-control"
                                            value={answer}
                                            onChange={this.onHandleChange}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success py-2 px-5 font-weight-bold">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-11 mt-4 mt-lg-0 col-lg-6 offset-lg-1 py-4 bg-white shadow-sm box-radius">
                            <h4 className="text-center mb-3">FAQ Delete</h4>
                            <table className="table">
                                <tbody>
                                    {!faqs || faqs.length === 0 ? (
                                        <h6 className="text-center alert alert-danger">No FAQ created yet</h6>
                                        ) : (
                                            faqs.map((data, idx) => (
                                                <tr key={idx}>
                                                    <td className="w-100 text-left"><h6 className="mb-0">{data.question}</h6></td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            <i className="fas fa-trash text-danger pointer" data-toggle="modal" data-target={`#exampleModalCenter${idx}`}></i>
                                                        </h6>
                                                        <div className="modal fade" id={`exampleModalCenter${idx}`} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header d-flex justify-content-center">
                                                                        <h5 className="modal-title text-center" id="exampleModalCenterTitle">Are you sure to delete?</h5>
                                                                    </div>
                                                                    <div className="modal-footer d-flex justify-content-center">
                                                                        <button type="button" className="btn btn-danger px-5 py-2" data-dismiss="modal">No</button>
                                                                        <button type="button" className="btn btn-primary px-5 py-2" onClick={() => this.onHandleDelete(data)}>Yes</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr> 
                                            )
                                        )
                                    )}  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AdminDashboard>
        )
    }
}

const mapStateToProps = (state) => ({
    faqs: state.data.faqs,
});
  
const mapDispatchToProps = dispatch => {
    return {
        fetchFaqs: () => dispatch(fetchFaqs()),
        addFaqs: (data) => dispatch(addFaqs(data)),
        deleteFaqs: (data) => dispatch(deleteFaqs(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFaq);
