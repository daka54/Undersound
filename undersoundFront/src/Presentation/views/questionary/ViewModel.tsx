import React from 'react'
import { useUserLocal } from '../../hooks/useUserLocal';

const QuestionaryViewModel = () => {

  const { user } = useUserLocal();


  return {
    user
  }
}

export default QuestionaryViewModel;