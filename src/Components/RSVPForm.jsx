import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const RSVPForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    attending: '',
    food_restrictions: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        formData,          
        process.env.REACT_APP_EMAILJS_USER_ID     
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            first_name: '',
            last_name: '',
            attending: '',
            food_restrictions: '',
            comments: '',
          });
          alert('Thanks so much for RSVPing!');
          navigate('/');
        },
        (error) => {
          console.log('FAILED...', error);
          setFormData({
            first_name: '',
            last_name: '',
            attending: '',
            food_restrictions: '',
            comments: '',
          });
          alert('Error sending RSVP.');
        }
      );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Will you be attending?</label>
          <div>
            <label>
              <input
                type="radio"
                name="attending"
                value="Yes"
                onChange={handleChange}
                required
              />
              {' '}Yes
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="attending"
                value="No"
                onChange={handleChange}
                required
              />
              {' '}No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="food_restrictions">Any food restrictions?</label>
          <textarea
            id="food_restrictions"
            name="food_restrictions"
            value={formData.food_restrictions}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="comments">Questions or Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-dark mt-3 mb-3">Submit</button>
        <br/>
        Any issues, please contact us at <a href="mailto: chelseasales2017@gmail.com"> chelseasales2017@gmail.com</a> or <a href="mailto: connor.guard@gmail.com">  connor.guard@gmail.com</a>.
      </form>
    </div>
  );
};

export default RSVPForm;
