import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

// Componente para a parte ilustrada do logo que vai girar
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export default function LoadingScreen() {
  // Valor para controlar a rotação
  const rotation = useSharedValue(0);
  
  // Iniciar a animação ao carregar o componente
  useEffect(() => {
    // Certifique-se que a animação começa
    rotation.value = 0;
    // Inicia a animação de rotação no sentido horário (para a direita)
    rotation.value = withRepeat(
      withTiming(360, { 
        duration: 3000, 
        easing: Easing.linear 
      }),
      -1, // -1 significa repetir infinitamente
      false // não reverter a animação (importante para manter girando na mesma direção)
    );
    
    // Para debug - verificar se a animação está funcionando
    console.log("Animação iniciada");
  }, []);
  
  // Estilo animado para a rotação
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  // Criar arrays de coordenadas para os círculos que formam os dois "C"
  const createDottedC = (radius, dotSize) => {
    const result = [];
    const numDots = 11; // Exatamente 11 pontos por C
    const openingAngle = 1.5; // Ângulo de abertura para ambos os C
    const startAngle = Math.PI * (1 - openingAngle/2);
    const endAngle = Math.PI * (1 + openingAngle/2);
    
    for (let i = 0; i < numDots; i++) {
      const angle = startAngle + (i / (numDots - 1)) * (endAngle - startAngle);
      
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      
      result.push({ x, y, r: dotSize });
    }
    
    return result;
  };

  const outerCDots = createDottedC(35, 3.5); // C externo com raio 35 e pontos tamanho 3.5
  const innerCDots = createDottedC(25, 2.5); // C interno com raio 25 e pontos menores (2.5)

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Parte do SVG animado */}
        <View style={styles.svgWrapper}>
          <AnimatedSvg
            width={100}
            height={100}
            viewBox="0 0 100 100"
            style={[styles.logoSvg, animatedStyle]}
          >
            {/* Pontos formando o C externo */}
            {outerCDots.map((dot, index) => (
              <Circle
                key={`outer-${index}`}
                cx={dot.x}
                cy={dot.y}
                r={dot.r}
                fill="#a3e619"
              />
            ))}
            
            {/* Pontos formando o C interno */}
            {innerCDots.map((dot, index) => (
              <Circle
                key={`inner-${index}`}
                cx={dot.x}
                cy={dot.y}
                r={dot.r}
                fill="#a8c35f"
              />
            ))}
          </AnimatedSvg>

          {/* E estático sobreposto */}
          <Svg 
            width={100} 
            height={100} 
            viewBox="0 0 100 100" 
            style={styles.staticE}
          >
            <SvgText
              x="50" // Centralizar o E eixo x
              y="60" // Centralizar o E eixo y
              textAnchor="middle"
              fontSize="25"
              fontWeight="bold"
              fill="#525050"
            >
              E
            </SvgText>
          </Svg>
        </View>
        
        {/* Parte textual estática */}
        {/* <View style={styles.textContainer}>
          <Text style={styles.logoText}>EcosRev</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svgWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  logoSvg: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  staticE: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: 0,
    left: 0,
  },
  textContainer: {
    marginLeft: 10,
  },
  logoText: {
    color: '#514F50',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
