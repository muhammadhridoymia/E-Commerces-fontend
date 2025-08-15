import React, { useState, useEffect } from 'react';

function AddressForm() {
  const [formData, setFormData] = useState({
    country: 'Bangladesh',
    city: '',
    area: '',
    phone: '',
    home: '',
    addressDetails: ''
  });

  const [user, setUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedData = JSON.parse(storedUser);
          if (parsedData) {
            setUser(parsedData);
            console.log(user)
          }
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    };

    loadUser();
  }, []);

  const cities = ['Dhaka', 'Chittagong', 'Sylhet', 'Khulna', 'Rajshahi'];
  const areas = ['Mirpur', 'Dhanmondi', 'Gulshan', 'Uttara', 'Banani'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      if (!user?.identifier) {
        throw new Error('User not authenticated');
      }

      const response = await fetch(`http://localhost:5000/api/upload/${user.identifier}/addresses`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status); // Add this line


      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add address');
      }

      const newAddress = await response.json();
      
    // Update localStorage
    localStorage.setItem('user', JSON.stringify(newAddress));




      console.log('Added address:', newAddress);
      setSuccess(true);
      // setFormData({
      //   country: 'Bangladesh',
      //   city: '',
      //   area: '',
      //   phone: '',
      //   home: '',
      //   addressDetails: ''
      // });
      
    } catch (error) {
      console.error('Error adding address:', error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Shipping Address</h2>
      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>Address added successfully!</div>}
      
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Country Field */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Country</label>
          <select 
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
          </select>
        </div>

        {/* City and Area Fields */}
        <div style={styles.flexContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>City</label>
            <select 
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">Select City</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Area</label>
            <select 
              name="area"
              value={formData.area}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">Select Area</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            placeholder="01XXXXXXXXX"
            pattern="[0-9]{11}"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>House/Road No.</label>
          <input
            name="home"
            value={formData.home}
            onChange={handleChange}
            style={styles.input}
            placeholder="House 123, Road 5"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Additional Details (optional)</label>
          <textarea
            name="addressDetails"
            value={formData.addressDetails}
            onChange={handleChange}
            style={{...styles.input, minHeight: '80px'}}
            placeholder="Nearby landmarks, building name, etc."
          />
        </div>

        <button 
          type="submit" 
          style={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Address'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    minHeight: "500px",
    background: "#f8f9fa",
    margin: "20px auto",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "25px",
    fontSize: "24px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  flexContainer: {
    display: "flex",
    gap: "15px",
    '@media (max-width: 500px)': {
      flexDirection: 'column'
    }
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1
  },
  label: {
    fontSize: "14px",
    color: "#555",
    fontWeight: "500"
  },
  input: {
    padding: "12px 15px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
    transition: "border 0.3s ease",
    width: "100%",
    boxSizing: "border-box",
    '&:focus': {
      borderColor: '#28a745',
      outline: 'none'
    }
  },
  select: {
    padding: "12px 15px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
    width: "100%",
    backgroundColor: "white",
    cursor: "pointer"
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "15px",
    transition: "background-color 0.3s ease",
    '&:hover': {
      backgroundColor: "#218838"
    },
    '&:disabled': {
      backgroundColor: "#cccccc",
      cursor: "not-allowed"
    }
  },
  error: {
    color: "#dc3545",
    backgroundColor: "#f8d7da",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "15px",
    border: "1px solid #f5c6cb"
  },
  success: {
    color: "#28a745",
    backgroundColor: "#d4edda",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "15px",
    border: "1px solid #c3e6cb"
  }
};

export default AddressForm;