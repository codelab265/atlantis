import React, { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (order) => {
    const { id, price } = order;
    const productInCart = cart.map((item) => item.id).includes(id);
    if (productInCart) {
      const newCart = cart.map((item) => {
        if (item.id == id) {
          const newQty = parseInt(item.quantity) + 1;
          return {
            ...item,
            quantity: newQty,
            totalPrice: newQty * price,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newCart = [...cart, order];
      setCart(newCart);
    }

    console.log(cart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  const editProductQuantity = ({ id, quantity }) => {
    const newCart = cart.map((item) => {
      if (item.product.id == id) {
        return { ...item, quantity, totalPrice: quantity * item.price };
      } else {
        return item;
      }
    });
  };
  const addProductQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id == id) {
        const newQty = parseInt(item.quantity) + 1;
        return {
          ...item,
          quantity: newQty,
          totalPrice: newQty * item.price,
        };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };
  const subtractProductQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id == id & item.quantity>1) {
        const newQty = parseInt(item.quantity) - 1;
        return {
          ...item,
          quantity: newQty,
          totalPrice: newQty * item.price,
        };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const payload = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      editProductQuantity,
      addProductQuantity,
      subtractProductQuantity,
      resetCart,
    }),
    [cart]
  );
  return (
    <CartContext.Provider value={payload}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
