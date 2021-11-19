import { useState } from 'react';
import './setting.css';

function Setting(){
    const [an,setAn] = useState(true)
    const Hien =()=> {
        if(an){
        document.getElementsByClassName("setting")[0].style.transform = "translateX(0%)";
        setAn(false)
        }else {
            document.getElementsByClassName("setting")[0].style.transform = "translateX(-80%)";
            setAn(true)
        }
    }
    const Trang=(color)=> {
        const x = document.querySelectorAll("i,b"); 
        const a = document.querySelectorAll("a,button"); 
        const y = x.length;
       
        for (let i=0;i<=y-1;i++){
        x[i].style.color = `${color}`;
        }
        for (let j=0;j<=a.length-1;j++){
            a[j].style.backgroundColor = `${color}`;
            }
    }
    
    return (

        <section id="setting">
            <div className="setting">
                <div className="setting-color">
                    <div className="setting-color-text">
                        <h4>Select Your Color</h4>

                    </div>
                    <div className="setting-color-sub">
                    
                        <span className="sp1" onClick={()=>{Trang("rgb(251, 62, 62)")}}></span>
                        <span className="sp2" onClick={()=>{Trang("rgb(27, 188, 157)")}}></span>
                        <span className="sp3" onClick={()=>{Trang("rgb(248, 95, 137)")}}></span>
                        <span className="sp4" onClick={()=>{Trang("rgb(0, 230, 230)")}}></span>
                        <span className="sp5" onClick={()=>{Trang("rgb(112, 79, 255)")}}></span>
                        <span className="sp6" onClick={()=>{Trang("rgb(39, 98, 218)")}}></span>
                        <span className="sp7" onClick={()=>{Trang("rgb(240, 145, 5)")}}></span>
                        <span className="sp8" onClick={()=>{Trang("rgb(246, 203, 66)")}}></span>
                       
                        
                    </div>
                </div>
                <div className="setting-sub" onClick={Hien}>
                    <i class="far fa-cog"></i>    
                </div>
            </div>
            
        </section>


    )
}

export default Setting