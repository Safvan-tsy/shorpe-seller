import Sun from "./Sun.svg?react"
import Moon from "./Moon.svg?react";
import "./DarkMode.css";

const DarkMode = () => {

    const setDarkMode = ()=> {
        document.querySelector('body').setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark')
    }
    const setLightMode = ()=> {
       document.querySelector('body').setAttribute('data-theme','light')
       localStorage.setItem('theme','light')
    }
    const theme = localStorage.getItem('theme')
    if(theme === 'dark'){setDarkMode()}
    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode()
        else setLightMode()
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={theme === 'dark'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
