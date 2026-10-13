"use client";

import { useMemo, useState } from "react";
import { gearProducts, formatMoney } from "@/data/gearProducts";
import styles from "./gear.module.css";

function ProductArt({ product }) {
  const artClass = product.id === "0x-grip-socks" ? styles.artSock : styles.artGear;
  return (
    <div className={`${styles.productArt} ${artClass}`} role="img" aria-label={`Stylized preview of ${product.name}`}>
      {product.id === "0x-grip-socks" ? (
        <div className={styles.miniSock}>
          <span>STKZ</span>
          <i />
          <b>STKZ · STKZ · STKZ</b>
        </div>
      ) : (
        <div className={styles.gearMonogram}>0X</div>
      )}
    </div>
  );
}

export default function ShopClient() {
  const [selections, setSelections] = useState(() =>
    Object.fromEntries(
      gearProducts.map((p) => [
        p.id,
        {
          design: p.options?.design?.[0] || "",
          size: p.options?.size?.[0] || "",
        },
      ])
    )
  );
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [checkingOut, setCheckingOut] = useState(false);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const groupedCategories = useMemo(
    () => ["All", ...new Set(gearProducts.map((p) => p.category))],
    []
  );
  const [category, setCategory] = useState("All");
  const visibleProducts = category === "All" ? gearProducts : gearProducts.filter((p) => p.category === category);

  function setOption(productId, key, value) {
    setSelections((current) => ({
      ...current,
      [productId]: { ...current[productId], [key]: value },
    }));
  }

  function addToCart(product) {
    const selected = selections[product.id];
    const key = [product.id, selected.design, selected.size].filter(Boolean).join("|");

    setCart((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { key, id: product.id, name: product.name, price: product.price, quantity: 1, ...selected }];
    });

    setStatus(`${product.name} added to bag.`);
  }

  function changeQuantity(key, delta) {
    setCart((current) =>
      current
        .map((item) => item.key === key ? { ...item, quantity: item.quantity + delta } : item)
        .filter((item) => item.quantity > 0)
    );
  }

  async function checkout() {
    if (!cart.length || checkingOut) return;
    setCheckingOut(true);
    setStatus("Opening secure checkout…");

    try {
      const response = await fetch("/api/gear-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Checkout could not be started.");
      window.location.assign(data.url);
    } catch (error) {
      setStatus(error.message);
      setCheckingOut(false);
    }
  }

  return (
    <section className={styles.shop} id="gear-products" aria-labelledby="products-title">
      <div className={styles.shopHead}>
        <div>
          <p className={styles.eyebrow}>THE COLLECTION</p>
          <h2 id="products-title">Built for the details.</h2>
        </div>

        <button
          className={styles.bagButton}
          type="button"
          onClick={() => setCartOpen(true)}
          aria-label={`Open shopping bag with ${itemCount} items`}
        >
          Bag <span>{itemCount}</span>
        </button>
      </div>

      <div className={styles.filters} aria-label="Product categories">
        {groupedCategories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? styles.filterActive : styles.filterButton}
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>

      <p className={styles.srOnly} role="status" aria-live="polite">{status}</p>

      <div className={styles.productGrid}>
        {visibleProducts.map((product) => (
          <article className={styles.productCard} key={product.id} id={product.id}>
            <ProductArt product={product} />
            <div className={styles.productBody}>
              <div className={styles.productTopline}>
                <span>{product.category}</span>
                <strong>{formatMoney(product.price)}</strong>
              </div>

              <h3>{product.name}</h3>
              <p className={styles.tagline}>{product.tagline}</p>
              <p className={styles.description}>{product.description}</p>

              <div className={styles.options}>
                {product.options?.design && (
                  <label>
                    Design
                    <select
                      value={selections[product.id].design}
                      onChange={(e) => setOption(product.id, "design", e.target.value)}
                    >
                      {product.options.design.map((value) => <option key={value}>{value}</option>)}
                    </select>
                  </label>
                )}

                {product.options?.size && (
                  <label>
                    Size
                    <select
                      value={selections[product.id].size}
                      onChange={(e) => setOption(product.id, "size", e.target.value)}
                    >
                      {product.options.size.map((value) => <option key={value}>{value}</option>)}
                    </select>
                  </label>
                )}
              </div>

              <button className={styles.addButton} type="button" onClick={() => addToCart(product)}>
                Add to bag
              </button>
            </div>
          </article>
        ))}
      </div>

      {cartOpen && (
        <div className={styles.drawerBackdrop} role="presentation" onMouseDown={() => setCartOpen(false)}>
          <aside
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bag-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={styles.drawerHead}>
              <h2 id="bag-title">Your bag</h2>
              <button type="button" className={styles.closeButton} onClick={() => setCartOpen(false)} aria-label="Close shopping bag">×</button>
            </div>

            {cart.length === 0 ? (
              <p className={styles.emptyBag}>Your bag is empty.</p>
            ) : (
              <>
                <div className={styles.cartItems}>
                  {cart.map((item) => (
                    <div className={styles.cartItem} key={item.key}>
                      <div>
                        <strong>{item.name}</strong>
                        <p>{[item.design, item.size].filter(Boolean).join(" · ")}</p>
                        <span>{formatMoney(item.price)}</span>
                      </div>

                      <div className={styles.qty} aria-label={`Quantity for ${item.name}`}>
                        <button type="button" onClick={() => changeQuantity(item.key, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                        <span aria-live="polite">{item.quantity}</span>
                        <button type="button" onClick={() => changeQuantity(item.key, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.totalRow}>
                  <span>Subtotal</span>
                  <strong>{formatMoney(subtotal)}</strong>
                </div>

                <p className={styles.shippingNote}>
                  {subtotal >= 5000 ? "Free standard shipping unlocked." : "Standard shipping calculated at checkout. Free over $50."}
                </p>

                <button className={styles.checkoutButton} type="button" onClick={checkout} disabled={checkingOut}>
                  {checkingOut ? "Opening checkout…" : "Secure checkout"}
                </button>

                <p className={styles.checkoutFine}>Payments are processed by Stripe. STKZ does not store card numbers.</p>
              </>
            )}
          </aside>
        </div>
      )}
    </section>
  );
}
