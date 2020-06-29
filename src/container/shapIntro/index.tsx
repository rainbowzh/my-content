import React, { useEffect, useRef } from 'react' ;
import * as echarts from 'echarts' ;


const ShapeIntro = ()  => {
  const curRef:any = useRef(null) ;
  useEffect(() => {
    console.log(curRef.current);
    // let chart = echarts.init(dom) ; 
    let chart = echarts.init(curRef.current) ;
    let options:any = {
      backgroundColor: '#fff',
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
            name: '技能构成',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'webpack'},
                {value:274, name:'es6'},
                {value:310, name:'react'},
                {value:335, name:'js'},
                {value:400, name:'html+css'}
            ],
            roseType: 'angle',
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
      ]
    } ;
    chart.setOption(options);
  })

  return(
    <div className="shapeIntro-block" ref={curRef} id="shape-init">
    </div>
  )

}


export default ShapeIntro ;