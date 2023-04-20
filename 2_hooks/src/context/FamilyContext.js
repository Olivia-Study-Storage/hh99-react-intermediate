import { createContext } from 'react';

// 나중에 Provider로 주입하는 그 하위 컴포넌트들에서 사용할 수 있는
// Fanily 컴포넌트 context가 완성됨
export const FamilyContext = createContext(null);