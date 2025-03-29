// Header.js
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { SvgXml } from "react-native-svg";

// Código XML do seu SVG
const logoXml = `
<svg width="200" height="200" viewBox="0 0 530 298" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="530" height="298" fill="url(#pattern0_53_24)"/>
<defs>
<pattern id="pattern0_53_24" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_53_24" transform="scale(0.00188679 0.0033557)"/>
</pattern>
<image id="image0_53_24" width="530" height="298" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAAEqCAYAAABA/LniAAAAAXNSR0IArs4c6QAAIABJREFUeF7snQdgVEXX9+du303vBRIISSD0Kk0gtAAqKFVUpIkFRSBICZ3QSwABQaqoKKKIIDxSRZBeRFoKIYGEJKS3Tdls3/t952Yn7314gCQ3oQTOvq9PgL0zd+Y3k5n/nDlzhiH4QQJIAAkgASSABJCAQAKMwHSYDAkgASSABJAAEkACBIUEdgIkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkACSEAwARQSgtFhQiSABJAAEkACSACFBPYBJIAEkAASQAJIQDABFBKC0WFCJIAEkAASQAJIAIUE9gEkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkACSEAwARQSgtFhQiSABJAAEkACSACFBPYBJIAEkAASQAJIQDABFBKC0WFCJIAEkAASQAJIAIUE9gEkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkACSEAwARQSgtFhQiSABJAAEkACSACFBPYBJIAEkAASQAJIQDABFBKC0WFCJIAEkAASQAJIAIUE9gEkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkACSEAwARQSgtFhQiSABJAAEkACSACFBPYBJIAEkAASQAJIQDABFBKC0WFCJIAEkAASQAJIAIUE9gEkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkACSEAwARQSgtFhQiSABJAAEkACSACFBPYBJIAEkAASQAJIQDABFBKC0WFCJIAEkAASQAJIAIUE9gEkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkACSEAwARQSgtFhQiSABJAAEkACSACFBPYBJIAEkAASQAJIQDABFBKC0WFCJIAEkAASQAJIAIUE9gEkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkACSEAwARQSgtFhQiSABJAAEkACSACFBPYBJIAEkAASQAJIQDABFBKC0WFCJIAEkAASQAJIAIUE9gEkgASQABJAAkhAMAEUEoLRYUIkgASQABJAAkgAhQT2ASSABJAAEkAC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"/>
</defs>
</svg>

`;

const Header = ({ testID }) => {
  return (
    <View style={styles.header} testID={testID}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      
      {/* Logo do Projeto centralizado usando SVG */}
      <SvgXml xml={logoXml} width={400} height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default Header;
