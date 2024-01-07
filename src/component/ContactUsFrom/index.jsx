import React from 'react'
import "./styles.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

function ContactUs() {
    return (
        <div className='contactContainer'>
            <div className='ContactHeading' data-aos="fade" data-aos-easing="linear"
                data-aos-duration="700">
                <h1>Contact Us</h1>
            </div>
            <div className='inputDivider'>
                <div className='inputContainer' data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="700">
                    <div className='labal'>First Name :</div>
                    <input type='text' placeholder='First Name' />
                </div>
                <div className='inputContainer' data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="700">
                    <div className='labal'>Last Name :</div>
                    <input type='text' placeholder='Last Name' />
                </div>

            </div>
            <div className='inputDivider'>
                <div className='inputContainer' data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="700">
                    <div className='labal'> Email Addres :</div>
                    <input type='text' placeholder='Email Addres' />
                </div>
                <div className='inputContainer' data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="700">
                    <div className='labal'>Phone Number :</div>
                    <input type='text' placeholder='Phone Number' />
                </div>

            </div>
            <div className='inputDivider'>
                <div className='inputContainer' data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="700">
                    <div className='labal'> Texas Real Estate License :</div>
                    <input type='text' placeholder=' Texas Real Estate License' />
                </div>
                <div className='inputContainer' data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="700">
                    <div className='labal'>How did you hear about us :</div>
                    <input type='text' placeholder='How did you hear about us' />
                </div>
            </div>
            <div className='radioDivider' data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="700">
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" className="radioLabel">You Are </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Real Estate Agent" />
                        <FormControlLabel value="male" control={<Radio />} label="Real Estate Broker" />
                        <FormControlLabel value="other" control={<Radio />} label="Property Management" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='contactBtnContainer'  data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="700" >
                <Button className='submitBtn'><p>Submit</p></Button>
            </div>
        </div>
    )
}

export default ContactUs