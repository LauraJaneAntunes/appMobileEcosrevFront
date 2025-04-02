// src/components/AuthForm.js
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { Eye, EyeOff } from 'lucide-react-native';
import { useTheme } from '../contexts/ThemeContext';

const AuthForm = ({ initialValues, validationSchema, onSubmit, fields, isPasswordVisible, togglePasswordVisibility, errorMessages, children }) => {
  const theme = useTheme();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View>
          {fields.map((field) => (
            <View key={field.name}>
              <TextInput
                label={field.label}
                value={values[field.name]}
                onChangeText={handleChange(field.name)}
                style={{ backgroundColor: theme.colors.surface, marginBottom: 8 }}
                mode="outlined"
                activeOutlineColor={theme.colors.primary}
                secureTextEntry={field.secureTextEntry && !isPasswordVisible}
                right={
                  field.secureTextEntry ? (
                    <TextInput.Icon
                      icon={() =>
                        isPasswordVisible ?
                          <EyeOff size={24} color={theme.colors.text.secondary} /> :
                          <Eye size={24} color={theme.colors.text.secondary} />
                      }
                      onPress={togglePasswordVisibility}
                    />
                  ) : null
                }
                error={touched[field.name] && errors[field.name]}
              />
              {touched[field.name] && errors[field.name] && (
                <Text style={{ color: theme.colors.error, fontSize: 12, marginBottom: 16 }}>
                  {errors[field.name]}
                </Text>
              )}
              {errorMessages && errorMessages[field.name] && (
                <Text style={{ color: theme.colors.error, fontSize: 12, marginBottom: 16 }}>
                  {errorMessages[field.name]}
                </Text>
              )}
            </View>
          ))}
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { handleSubmit })
          )}
        </View>
      )}
    </Formik>
  );
};

export default AuthForm;