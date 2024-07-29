import { useState } from "react";
import { IoMdImages } from "react-icons/io";
import { Form, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../../utils/customFetch";
import FormRow from "../../FormRow";
import Textarea from "../../Textarea";
import "./frc.css";
const Addfor = () => {
  const navigation=useNavigation()
  const isSubmitting = navigation.state === "submitting";
  const [schedule, setSchedule] = useState([
    { day: "Sunday", startTime: "", endTime: "" },
    { day: "Monday", startTime: "", endTime: "" },
    { day: "Tuesday", startTime: "", endTime: "" },
    { day: "Wednesday", startTime: "", endTime: "" },
    { day: "Thursday", startTime: "", endTime: "" },
  ]);

  const handleScheduleChange = (index, field, value) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set('schedule',JSON.stringify(schedule));
    const file=formData.get('image')
    if( file && file.size>500000 ){
        toast.error('Image size too large')
        return null
      }
    try {
      const {data}=await customFetch.post('/courses/uploadImage',formData)
      // const BASE_URL = 'http://localhost:5000';
    // const imageUrl = `${BASE_URL}${data.image}`;
      formData.set('image',data.image)
      const response = await customFetch.post("/courses", formData);
      toast.success("Course added successfully");
      console.log(data)
      return response// Rename the response variable to avoid conflict

    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <section className="adding-for-section">
      <div className="content-formation-section-add">
        <div className="header-formation-section-add">
          <h1>Ajouter une Formation</h1>
        </div>
        <div>
          <Form
            method="post"
            onSubmit={handleSubmit}
            className="form-formation-add"
            encType='multipart/form-data'
          >
            <div className="first-inputs-add-formation">
              <div className="input-add-four-first">
                <div className="input-add-formation-add">
                  <label htmlFor="">Nom de formation</label>
                  <br />
                  <FormRow name="name" type="text" />
                </div>
                <div className="input-add-formation-add">
                  <label htmlFor="">Niveau</label>
                  <br />
                  <FormRow name="level" type="text" />
                </div>
                <div className="input-add-formation-add">
                  <label htmlFor="">Catégory</label>
                  <br />
                  <FormRow name="category" type="text" />
                </div>
                <div className="input-add-formation-add">
                  <label htmlFor="">Prix</label>
                  <br />
                  <FormRow name="price" type="text" />
                </div>
              </div>
              <div className="description-add-formation">
                <label htmlFor="">Description</label>
                <br />
                <Textarea name="description" placeholder="Description..." />
              </div>
            </div>
            <div className="add-planning-section-for">
              <h2>plan de formation</h2>
              {/* <div className='date-planning-add-section'>
                            <h3>jours</h3>
                            <p>samedi</p>
                            <p>dimanche</p>
                            <p>lundi</p>
                            <p>mardi</p>
                            <p>mercredi</p>
                            <p>jeudi</p>
                        </div> */}
              {/* <div className='time-planning-add-section'>
                            <h3>temps</h3>
                            <p><input type='time' name='time1-from' /><br/><input type='time' name='time1-to' /></p>
                            <p><input type='time' name='time2-from' /><br/><input type='time' name='time1-to' /></p>
                            <p><input type='time' name='time3-from' /><br/><input type='time' name='time1-to' /></p>
                            <p><input type='time' name='time4-from' /><br/><input type='time' name='time1-to' /></p>
                            <p><input type='time' name='time5-from' /><br/><input type='time' name='time1-to' /></p>
                            <p><input type='time' name='time6-from' /><br/><input type='time' name='time1-to' /></p>
                        </div> */}
                            <div className='date-planning-add-section'>
                              <p>days</p>
              {schedule.map((slot, index) => (

                <p key={index}>{slot.day}</p>

              ))}
              </div>

              <div className="time-planning-add-section">
                <h3>temps</h3>
                {schedule.map((slot, index) => (
                  <p key={index}>
                    <input
                      type="time"
                      value={slot.startTime}
                      onChange={(e) =>
                        handleScheduleChange(index, "startTime", e.target.value)
                      }
                    />
                    <br />
                    <input
                      type="time"
                      value={slot.endTime}
                      onChange={(e) =>
                        handleScheduleChange(index, "endTime", e.target.value)
                      }
                    />
                  </p>
                ))}
              </div>
            </div>
            <div className="last-add-formation-section">
              <div className='uploading-image-add'>
                            <label htmlFor="up-image">
                                <div className='content-up-image'>
                                    <span><IoMdImages/></span>
                                    <h3>Add Photo</h3>
                                </div>
                            </label>
                            <input type="file" name='image' id='up-image' accept='image/*'  style={{display:"none" , visibility:'hidden'}}/>
                        </div>
              <div className="submting-add-formation">
                <p>
                  Lorem, ipsum dolor sit amet fezeeede consectetur adipisicing
                  elit. Rerum consequatur, eius soluta iure iusto excepturi
                  exercitationem provident earum amet magnam.
                </p>
                <button disabled={isSubmitting} type="submit">publier</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Addfor;
