import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={style.contenedor}>
        <View style={style.rowOne}>
          <View>
            <Image source={{ uri: 'http://s1.1zoom.me/b5050/539/France_Houses_Bridges_Colmar_Canal_551472_640x480.jpg' }}
              style={style.imagesOne}
            />
          </View>
          <View>
            <Image source={{ uri: 'https://i.pinimg.com/236x/f0/84/18/f0841815b3f6f77ea91a863d011587a9--look-winter-wallpaper-city.jpg' }}
              style={style.imagesOne}
            />
          </View>
          <View>
            <Image source={{ uri: 'https://resizer.iprofesional.com/unsafe/640x/https://assets.iprofesional.com/assets/jpg/2018/08/464391_landscape.jpg?1.0.97' }}
              style={style.imagesOne}
            />
          </View>
        </View>

        <View style={style.rowTwo}>
          <View style={style.columnOne}>
            <View>
              <Image source={{ uri: 'http://s1.1zoom.me/prev2/552/Germany_Houses_Rivers_Bridges_Brandenburg_Night_551357_300x199.jpg' }}
                style={style.imagesTwo}
              />
            </View>
            <View>
              <Image source={{ uri: 'http://diario.mx/imagesnotas/2018/08/INT1423843569845f5_0.jpg' }}
                style={style.imagesTwo}
              />
            </View>
          </View>
          <View>
              <Image source={{ uri: 'https://i.pinimg.com/736x/f3/8b/dc/f38bdcf71aa35849ff3c11f20767744d.jpg' }}
                style={style.imagesTree}
              />
            </View>
        </View>

        <View style={style.rowTree}>
          <View style={style.columnOne}>
            <View>
              <Image source={{ uri: 'http://s1.1zoom.me/prev2/552/Switzerland_Mountains_Lake_Sky_Isenthal_Lake_551447_300x200.jpg' }}
                style={style.imagesTwo}
              />
            </View>
            <View>
              <Image source={{ uri: 'http://ya-mahdi.info/wp-content/uploads/2018/08/im%C3%A1genes-de-paisajes-lago-moraine-parque-nacional-banff-alberta-canada-1440x810.jpg' }}
                style={style.imagesTwo}
              />
            </View>
          </View>
          <View>
              <Image source={{ uri: 'https://i.pinimg.com/236x/45/ce/71/45ce71fe6075e8e491ab838a139c4a52--seymour-autumn-leaves.jpg' }}
                style={style.imagesTree}
              />
            </View>
        </View>
      </View>

    );
  }
}

const style = StyleSheet.create({
  rowOne:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },  
  imagesOne: {
    width: 135,
    height: 135
  },
  rowTwo:{    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 135
  },
  imagesTwo: {
    width: 135,
    height: 135,
    marginTop: 5
  },
  columnTwo:{
    flexDirection: 'column',
    justifyContent: 'space-between',
      
  },
  imagesTree: {
    width: 273,
    height: 275,
    marginTop: 5
  },
  rowTree:{    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

});
