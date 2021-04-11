const Input = {
  parts: ['field'],
  baseStyle: {
    field: {
      textTransform: 'uppercase',
      color: 'brand.gray',
      textStyle: 'subtitle',
    },
  },
  sizes: {
    sm: {
      field: {
        height: '52px',
        py: '4',
        pl: '8',
        borderRadius: 'none',
      },
    },
    quantity: {
      field: {
        width: '90px',
        height: '52px',
        borderRadius: 'none',
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: 'brand.gray',
        _hover: {
          borderColor: 'black',
        },
        _focus: {
          borderColor: 'black',
        },
      },
    },
    quantity: {
      field: {
        textAlign: 'center',
        padding: '4',
        border: '1px solid',
        borderColor: 'brand.gray',
        _hover: {
          borderColor: 'black',
        },
        _focus: {
          borderColor: 'black',
        },
      },
    },
  },
  defaultProps: {
    size: 'sm',
    focusBorderColor: 'brand.50',
  },
};

export default Input;
