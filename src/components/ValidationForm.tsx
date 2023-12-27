import  { ChangeEvent, FormEvent, useState } from "react";
import {z} from 'zod'

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });


  const schema = z.object({
    name:z.string().min(3,{message:"name must have 3 letters !!"}),
    age:z.number().min(18,{message:"Age must be above 18 "})
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form is Submitted !!");
  };

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="shadow p-4" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Expense Form</h2>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={onchangeHandler}
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={onchangeHandler}
                placeholder="Enter age"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidationForm;
