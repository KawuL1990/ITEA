import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Toggler extends Component {

    render(){
        let { name, children, activeToggle, action } = this.props;
        return(
            <div className="Toggler">
              {name}
              <div className="togglerContainer">
                {
                  //https://reactjs.org/docs/react-api.html#reactchildren
                  React.Children.map(
                    children, // Передаем обьект с дочерними элементами
                    (ChildrenItem) => { // Перебираем каждый элемент
                      // console.log('Toggler activetoogler:', activeToogler);
                      if(ChildrenItem.props.name === activeToggle){
                          // https://reactjs.org/docs/react-api.html#cloneelement
                          return React.cloneElement(ChildrenItem, {
                            name: ChildrenItem.props.name,
                            active: true,
                            handler: action,
                            // handler: ChildrenItem.props.handler,
                          })
                      } else {
                        return React.cloneElement(ChildrenItem, {
                          name: ChildrenItem.props.name,
                          handler: action,
                          // handler: ChildrenItem.props.handler,
                        })
                      }
                    }
                  )
                  }
              </div>
            </div>
          );
      
    }
};

Toggler.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array,
  activeToggle: PropTypes.string,
  action: PropTypes.func.isRequired
}

export default Toggler;