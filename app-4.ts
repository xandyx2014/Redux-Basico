import {Store, createStore} from 'redux';
import { contadorreducer } from './contador/contador.reducer';
import { incrementadorAction, multiplicarAction } from './contador/contador.actions';
const store: Store = createStore( contadorreducer );
store.subscribe( () => {
  console.log('subs : ', store.getState() );
});
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
store.dispatch( incrementadorAction );
