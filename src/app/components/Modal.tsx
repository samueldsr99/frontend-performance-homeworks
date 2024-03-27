"use client";

import { FormEvent } from "react";

type ReserveRequest = {
  name: string;
  email: string;
  phone: string;
  people: string;
  date: string;
  time: string;
  message: string;
};

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  people: HTMLInputElement;
  date: HTMLInputElement;
  time: HTMLSelectElement;
  message: HTMLTextAreaElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const postReserve = async (data: ReserveRequest) => {
  const response = await fetch("/api/reserve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export default function Modal() {
  const onSubmit = (ev: FormEvent<CustomForm>) => {
    ev.preventDefault();

    const target = ev.currentTarget.elements;

    postReserve({
      name: target.name.value,
      email: target.email.value,
      phone: target.phone.value,
      people: target.people.value,
      date: target.date.value,
      time: target.time.value,
      message: target.message.value,
    }).then(() => {
      alert("Your reservation has been submitted successfully!");
    });
  };

  return (
    <div
      className="modal fade"
      id="BookingModal"
      tabIndex={-1}
      aria-labelledby="BookingModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="mb-0">Reserve a table</h3>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body d-flex flex-column justify-content-center">
            <div className="booking">
              <form
                className="booking-form row"
                role="form"
                onSubmit={onSubmit}
              >
                <div className="col-lg-6 col-12">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="telephone"
                    name="phone"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-control"
                    placeholder="123-456-7890"
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="people" className="form-label">
                    Number of persons
                  </label>

                  <input
                    type="text"
                    name="people"
                    id="people"
                    className="form-control"
                    placeholder="12 persons"
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    id="date"
                    defaultValue=""
                    className="form-control"
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>

                  <select
                    className="form-select form-control"
                    name="time"
                    id="time"
                    defaultValue={5}
                    onChange={() => {}}
                  >
                    <option value="5">5:00 PM</option>
                    <option value="6">6:00 PM</option>
                    <option value="7">7:00 PM</option>
                    <option value="8">8:00 PM</option>
                    <option value="9">9:00 PM</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Special Request
                  </label>

                  <textarea
                    className="form-control"
                    rows={4}
                    id="message"
                    name="message"
                    placeholder=""
                  />
                </div>

                <div className="col-lg-4 col-12 ms-auto">
                  <button type="submit" className="form-control">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}
