import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import profileReducers from "./profile/profile-reducers";
import saga from "./saga";
import experienceReducers from "./experience/experience-reducers";
import skillsReducers from "./skills/skills-reducers";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    profile: profileReducers,
    experience: experienceReducers,
    skills: skillsReducers,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
