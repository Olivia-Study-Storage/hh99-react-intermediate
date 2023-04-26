import React from 'react';
import Counter from './1_useState/Counter';
import Info from './1_useState/Info';
import InfoEffect from './2_useEffect/Info';
import Visible from './2_useEffect/Visible';
import CounterReducer from './3_useReducer/Counter';
import InfoReducer from './3_useReducer/Info';
import AverageMemo from './4_useMemo/Average';
import AverageCallback from './5_useCallback/Average';
import AverageRef from './6_useRef/Average';

const App = () => {
  return (
    // <Counter />
    // <Info />
    // <InfoEffect />
    // <Visible />
    // <CounterReducer />
    // <InfoReducer />
    // <AverageUseMemo />
    // <AverageCallback />
    <AverageRef />
  )
}

export default App