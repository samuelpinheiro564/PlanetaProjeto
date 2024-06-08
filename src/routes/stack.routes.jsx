import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import CriarPlanetas from "../screens/CriarPlanetas";
import Conquistador from "../screens/Conquistador";
import DetalhePlaneta from "../screens/DetalhePlaneta";
import CriarPlanetas from "../screens/CriarPlanetas";
import ListaPlanetas from "../screens/ListaPlanetas";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CriarPlanetas" component={CriarPlanetas} />
      <Stack.Screen name="Conquistador" component={Conquistador} />
      <Stack.Screen name="DetalhePlaneta" component={DetalhePlaneta} />
      <Stack.Screen name="ListaPlanetas" component={ListaPlanetas} />
    </Stack.Navigator>
  );
};

export default StackRoutes;