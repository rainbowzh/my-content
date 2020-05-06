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
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
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