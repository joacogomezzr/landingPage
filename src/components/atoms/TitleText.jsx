import style from './Text.module.css'





function TitleText({text}) {
    return ( 
        <p className={style.pg_text}>{text}</p>
     );
}

export default TitleText;

